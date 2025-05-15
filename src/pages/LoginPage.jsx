import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

function LoginPage() {
    const navigate = useNavigate();
    const close = <FontAwesomeIcon icon={faClose} />
    return (
        <div className={`d-flex flex-column position-relative p-2 p-sm-3 p-md-4 gap-2 justify-content-center max-width-400 gap-2`}>
                <div className="mb-2">
                    <img width="100px" src="https://www.digikala.com/brand/full-vertical.svg" alt="برند دیجی کالا" />
                </div>
                <p className="fw-bold alighn-self-start"> 
                    ورود | ثبت نام
                </p>
                <div className="fs-14px text-secondary">
                    سلام!
                </div>
                <div className="fs-14px text-secondary mb-3">
                    لطفا شماره موبایل یا ایمیل خود را وارد کنید
                </div>
                <div className="d-grid grid-template-column-1-4 gap-3">
                    <form action="">
                        <input type="text" placeholder="شماره موبایل یا آدرس ایمیل" className="form-control bg-light" />
                    </form>
                    <button className="button-default bg-danger rounded-4 text-white">
                        ورود
                    </button>
                </div>
                <div className="fs-14px text-secondary mb-3">
                    روی این صفحه به اندازه کافی وقت گذاشته نشده، صرفا تمرین برای لینک دهی صفحات است
                </div>
                <div className="position-absolute top-p50 left-15" onClick={() => navigate(-1)}>
                    {close}
                </div>
        </div>
    )
}

export default LoginPage