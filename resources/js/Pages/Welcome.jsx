// Step1. Declare your function and give it a name
export default function Welcome() {

    const two= 2;
    const addNumber = ()=> {}
    //

    return (
        <>
             <header>
        <nav>
		    <img src="https://i.ibb.co/YfdNcmJ/fu.png" alt="Logo" class="logo" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="login.html">Log in</a></li>
                <li><a href="#">Sign up</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    </header>

    <section id="hero">
        <div class="hero-content">
            <h1>STUDENT INFORMATION DISSEMINATION SYSTEM </h1>
            <p>Your gateway to school announcements, results, and study materials.</p>
            <div class="cta-buttons">
                <a href="/login" class="try-now">Welcome</a>
                <button class="learn-more">Learn More</button>
            </div>
        </div>
        <img src="https://i.ibb.co/Z82SW64/image.png" alt="Hero Image" class="hero-image" />
    </section>

    <section id="information">
        {/* <!-- Add your section content here --> */}
    </section>

    <section id="contact">
        {/* <!-- Add your section content here --> */}
    </section>
        </>
    )
}
