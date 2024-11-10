
export default function AddDataButton({ onSuccess }) {
    const handelAddData = async () => {
        try {
            const response = await fetch(`api/postRevalidation`, {
                method: "POST",
            });

            if (response.ok) {
                alert("Data added successfully")
                if (onSuccess) {
                    onSuccess()
                }
            } else {
                console.error("Failed to add data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div>
            <button onClick={handelAddData}>Add Data to JSONPlaceholder</button>
        </div>
    )
}