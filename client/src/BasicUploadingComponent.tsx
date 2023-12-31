import { FileInput, UploadError, UploadedFile, useFiles } from "@hilma/fileshandler-client"
import { useState } from "react";

//* This component is basic upload files and handel them only in client side

export function BasicUploadingComponent() {

    const filesUploader = useFiles();
    const [file, setFile] = useState<UploadedFile | null>(null);

    const handleChange = (value: UploadedFile) => {
        setFile(value);
    }

    const handleError = (err: UploadError) => {
        alert("error:" + err);
    }

    return (
        <>
            <h1>Upload files here</h1>

            <h3>Single upload:</h3>
            <FileInput
                filesUploader={filesUploader}
                type={'image'}
                onChange={handleChange}
                onError={handleError}
            />

            <img src={file?.link} />
        </>
    )
}