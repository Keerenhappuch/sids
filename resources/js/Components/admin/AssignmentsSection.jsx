export function AssignmentsSection() {
    return (
        <>
            <section id="assignments-section" className="tab-content active">
                <section className="admin-section">
                    <h2>Upload Assignments</h2>
                    <form>
                        <label htmlFor="assignment-title">Title</label>
                        <input
                            type="text"
                            id="assignment-title"
                            name="assignment-title"
                            required
                        />

                        <label htmlFor="assignment-description">
                            Description
                        </label>
                        <textarea
                            id="assignment-description"
                            name="assignment-description"
                            rows="4"
                            required
                        ></textarea>

                        <label htmlFor="assignment-file">Upload File</label>
                        <input
                            type="file"
                            id="assignment-file"
                            name="assignment-file"
                            required
                        />

                        <button type="submit">Upload Assignment</button>
                    </form>
                </section>
            </section>
        </>
    );
}
