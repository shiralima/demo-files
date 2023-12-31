import { FileInput, MultipleFilesInput, UploadError, UploadedFile, useFiles } from "@hilma/fileshandler-client"
import { useState } from "react";

//* This component upload files and handel them only in client side

export function ComplicatedUploadingComponent() {

    const filesUploader = useFiles();
    const [file, setFile] = useState<UploadedFile | null>(null);

    const handleChange = (value: UploadedFile) => {
        setFile(value);
    }

    const handleError = (err: UploadError) => {
        alert("error:" + err);
    }

    const deleteFile = (fileId?: number) => {
        filesUploader.delete(fileId!);
        setFile(null);
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

            <button
                onClick={() => deleteFile(file?.id)}
            >
                delete file
            </button>
            <img src={file?.link} />

            <h3>
                Multiple upload:
            </h3>
            <MultipleFilesInput
                type={"file"}
                filesUploader={filesUploader}
            />
        </>
    )
}