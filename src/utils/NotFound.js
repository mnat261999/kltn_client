import { Link } from "react-router-dom"

function NotFound() {
    return (
            <div class="container p-0">
                <div class="row no-gutters">
                    <div class="col-sm-12 text-center">
                        <div class="iq-error position-relative mt-5">
                            <img src="https://social-pet-bucket.s3.amazonaws.com/01.png" class="img-fluid iq-error-img" alt=""/>
                                <h1 class="text-in-box">404</h1>
                                <h2 class="mb-0">Oops! This Page is Not Found.</h2>
                                <p>The requested page dose not exist.</p>
                                <Link class="btn btn-primary mt-3" to='/'><i class="ri-home-4-line"></i>Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default NotFound