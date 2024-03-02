export default function WishTemplate() {
    return (
        <div>
            <h2>Content: {content}</h2>
            {image && (
                <div>
                    <h2>Image Preview</h2>
                    <img src={URL.createObjectURL(image)} alt="Preview" style={{ maxWidth: '300px' }} />
                </div>
            )}
        </div>
    )
}
