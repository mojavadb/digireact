import { useState } from "react";

function SendEmail() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isErroredInput, setIsErroredInput] = useState(false);


    function handleSetEmail(input){
        setEmail(input);
        const _isEmail = isEmail(input);
        if(!_isEmail){
            setMessage("ورودی یک ایمیل نیست");
            setIsErroredInput(false);
        }
        if(_isEmail){
            setMessage("ارسال کنید");
            setIsErroredInput(true);
        }
        if(input === ""){
            setMessage("این بخش را خالی نگذارید");
            setIsErroredInput(false);
        }
    }

    return (
        <div>
            <p className="fs-6 color-black-type2 text-shadow1 mt-4">
                با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
            </p>
            <form action="#" method="get" className="d-flex flex-nowrap gap-2 justify-content-start">
                <input 
                value={email}
                onChange={(e) => handleSetEmail(e.target.value)}
                type="email" 
                className="form-control-plaintext bg-light p-2 rounded-3 text-dark" 
                placeholder="ایمیل شما"  />
                <button disabled={email=== ""}
                className="btn btn-danger">
                        ثبت
                </button>
            </form>
            <span className={`fs-7 p-1 ${isErroredInput === true ? "text-success" : "text-danger"}`}>
                {message}
            </span>
        </div>
    )
}

function isEmail(text) {
    if (!text.includes("@") || !text.includes(".")) {
        return false;
    }

    const atIndex = text.indexOf("@");
    const dotIndex = text.lastIndexOf(".");

    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex === text.length - 1) {
        return false;
    }

    return true;
}

export default SendEmail
