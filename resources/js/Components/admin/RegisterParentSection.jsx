export function RegisterParentSection() {
    return (
        <>
        <section id="register-parent-section" className="tab-content">
          <section className="admin-section">
          <h2>Register Parent</h2>
            <form id="parent-registration-form">
            <label htmlFor="parent-name">Parent Name</label>
            <input
                type="text"
                id="parent-name"
                name="parent-name"
                required
            />

            <label htmlFor="parent-email">Email</label>
            <input
                type="email"
                id="parent-email"
                name="parent-email"
                required
            />

            <label htmlFor="child-name">Child Name</label>
            <input
                type="text"
                id="child-name"
                name="child-name"
                required
            />

            <label htmlFor="child-class">Child Class</label>
            <input
                type="text"
                id="child-class"
                name="child-class"
                required
            />


            <label htmlFor="parent-phone">Phone Number</label>
            <input
                type="tel"
                id="parent-phone"
                name="parent-phone"
                required
            />

            <label htmlFor="parent-address">Address</label>
            <textarea
                id="parent-address"
                name="parent-address"
                rows="3"
                required
            ></textarea>

            <label htmlFor="parent-registration-number">Registration Number</label>
            <input
                type="text"
                id="parent-registration-number"
                name="parent-registration-number"
                required
            />

            <button type="submit">Register Parent</button>
        </form>
    </section>
</section>
        </>
    );
}
