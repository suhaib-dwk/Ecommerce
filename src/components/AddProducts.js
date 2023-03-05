import React, { useState } from 'react'
import { storage, fs } from '../Config/Config'
import { ref, uploadBytes } from "firebase/storage";


const AddProducts = () => {


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const [imageError, setImageError] = useState('');

    const [successMsg, setSuccessMsg] = useState('');
    const [uploadError, setUploadError] = useState('');

    const types = ['image/jpg', 'image/jpeg', 'image/png', 'image/PNG']

    const handleProductImg = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && types.includes(selectedFile.type)) {
                setImage(selectedFile);
                setImageError('')
            }
            else {
                setImage(null);
                setImageError("please select a vaild image file type (png or jpg )")
            }
        }
        else {
            console.log('please select your file')
        }
    }


    const handleAddProducts = (e) => {
        e.preventDefault();
        // console.log(title, description, price);
        // console.log(image);
        const storageRef = ref(storage, `product-image/${image.name}`);
        const uploadTask = uploadBytes(storageRef, image);
        uploadTask.on('state_change', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log(`Upload is ${progress}% done`);
        }, (error) => setUploadError(error.message), () => {
            storageRef.ref(`product-image`).child(image.name).getDownloadURL().then((url) => {
                fs.collection('products').add({
                    title,
                    description,
                    price: Number(price),
                    url
                }).then(() => {
                    setSuccessMsg('product added successfully');
                    setTitle('');
                    setDescription('');
                    setPrice('');
                    document.getElementById('file').value = '';
                    setImageError('');
                    setUploadError('');
                    setTimeout(() => {
                        setSuccessMsg('');
                    }, 3000)
                }).catch(error => setUploadError(error.message));
            })
        })
    }
    return (
        <div className='container' onSubmit={handleAddProducts}>
            <br />
            <br />
            <h1>Add Products</h1>
            <hr />
            {successMsg && <>
                <div className='success-msg'>{successMsg}</div>
                <br />
            </>
            }
            <form autoComplete='off' className='form-group'>
                <label>Product Title</label>
                <input
                    type='text'
                    className='form-control'
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <br />
                <label>Product Description</label>
                <input
                    type='text'
                    className='form-control'
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <br />
                <label>Product Price</label>
                <input
                    type='number'
                    className='form-control'
                    required
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
                <br />
                <label>Upload Product Image</label>
                <input
                    type='file'
                    id="file"
                    className='form-control'
                    required
                    onChange={handleProductImg}
                />
                <br />
                {imageError && <>
                    <div className='error-msg'>{imageError}</div>
                    <br />
                </>
                }
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type='submit' className='btn btn-success btn-md'>
                        SUBMIT
                    </button>
                </div>
            </form>
            {uploadError && <>
                <div className='error-msg'>{imageError}</div>
                <br />
            </>
            }
        </div>
    )
}

export default AddProducts