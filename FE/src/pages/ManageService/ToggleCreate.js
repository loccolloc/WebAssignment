import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Input,
    Textarea
} from "@material-tailwind/react";
export default function ToggleCreate() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button onClick={handleOpen} variant="gradient" style={{ padding: '10px', height: 'fit-content', alignSelf: 'center' }}>
                Thêm dịch vụ
            </Button>
            <Dialog open={open} size="xs" handler={handleOpen} className="flex flex-col justify-center items-center">
                <DialogHeader>Thêm dịch vụ</DialogHeader>
                <DialogBody style={{ height: 'fit-content', overflow: 'auto', scrollbarWidth: '0px' }}>
                    <form className="w-100 max-w-screen-lg sm:w-96" method="post">
                        <div className="mb-1 flex flex-col gap-3">
                            <Input size="lg" type="text" name='name' label="Tiêu đề" required />

                            <Textarea size="lg" type="text" name='description' label="Mô tả" required />

                        </div>
                        <Button className="mt-6" type="submit" fullWidth>
                            Tạo
                        </Button>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}