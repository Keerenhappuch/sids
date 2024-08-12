export function MaterialsSection() {
    return (
        <>
            <section id="materials-section" className="tab-content">
                <section className="admin-section">
                    <h2>Post Study Materials</h2>
                    <form>
                        <label htmlFor="material-title">Title</label>
                        <input
                            type="text"
                            id="material-title"
                            name="material-title"
                            required
                        />

                        <label htmlFor="material-description">
                            Description
                        </label>
                        <textarea
                            id="material-description"
                            name="material-description"
                            rows="4"
                            required
                        ></textarea>

                        <label htmlFor="material-file">Upload File</label>
                        <input
                            type="file"
                            id="material-file"
                            name="material-file"
                            required
                        />

                        <button type="submit">Post Study Material</button>
                    </form>
                </section>
            </section>
        </>
    );
}
