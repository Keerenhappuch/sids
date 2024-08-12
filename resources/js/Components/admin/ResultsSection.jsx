export function ResultsSection() {
    return (
        <>
            <section id="results-section" className="tab-content">
                <section className="admin-section">
                    <h2>Post Results</h2>
                    <form>
                        <label htmlFor="student-name">Student Name</label>
                        <input
                            type="text"
                            id="student-name"
                            name="student-name"
                            required
                        />

                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                        />

                        <label htmlFor="test-score">Test Score (30)</label>
                        <input
                            type="number"
                            id="test-score"
                            name="test-score"
                            required
                        />

                        <label htmlFor="exam-score">Exam Score (70)</label>
                        <input
                            type="number"
                            id="exam-score"
                            name="exam-score"
                            required
                        />

                        <label htmlFor="remark">Remark</label>
                        <input type="text" id="remark" name="remark" required />

                        <button type="submit">Post Result</button>
                    </form>
                </section>
            </section>
        </>
    );
}
