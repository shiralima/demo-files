import { FileInput, UploadError, UploadedFile, useFiles } from "@hilma/fileshandler-client"
import { useState } from "react";

export function UploadingComponent2() {

    const filesUploader = useFiles();
    const [file, setFile] = useState<UploadedFile | null>(null);
    const [serverPath, setServerPath] = useState<string>("");

    const handleChange = (value: UploadedFile) => {
        setFile(value);
        console.log('value: ', value);
    }

    const handleError = (err: UploadError) => {
        console.log('err: ', err);
    }

    const deleteFile = (fileId?: number) => {
        console.log('fileId: ', fileId);
        filesUploader.delete(fileId!);
        setFile(null);
    }

    const send = async () => {
        const { data } = await filesUploader.post("/api/cat/upload-image", {}); //todo remove body
        setServerPath(data);
        console.log('data: ', data);
    }

    return (
        <>
            <FileInput
                type={["image", "file"]}
                filesUploader={filesUploader}
                onChange={handleChange}
                onError={handleError}
            />
            <button onClick={() => { deleteFile(file?.id) }}>delete</button>
            <img src={file?.link} />

            <button onClick={send}>send</button>
            {serverPath && <img src={`/api${serverPath}`} />}
        </>
    )
}