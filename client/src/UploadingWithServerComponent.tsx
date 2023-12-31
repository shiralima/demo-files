import { FileInput, UploadError, UploadedFile, useFiles } from "@hilma/fileshandler-client"
import { useState } from "react";

//* This component upload files to server and handel them in client side

export function UploadingWithServerComponent() {

    const [serverPath, setServerPath] = useState<string>("");
    const [file, setFile] = useState<UploadedFile | null>(null);

    const filesUploader = useFiles();

    const handleChange = (value: UploadedFile) => {
        setFile(value);
    }

    const handleError = (err: UploadError) => {
        alert("error:" + err);
    }

    const send = async () => {
        try {
            const { data } = await filesUploader.post("/api/cat/upload-image");
            setServerPath(data);
        } catch (err) {
            console.error("Server error while upload file:", err);
        }
    }

    return (
        <>
            <FileInput
                type={"image"}
                filesUploader={filesUploader}
                onChange={handleChange}
                onError={handleError}
            />
            <img src={file?.link} />

            <button onClick={send}>send</button>

            {serverPath && <img src={`api/${serverPath}`} />}
        </>
    )
}