import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <section class="results-section">
                <h2>Results for Olamide</h2>
                <table class="results-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Test (30)</th>
                            <th>Exam (70)</th>
                            <th>Total (100)</th>
                            <th>Grade</th>
                            <th>Remark</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mathematics</td>
                            <td>28</td>
                            <td>65</td>
                            <td>93</td>
                            <td>A</td>
                            <td>Excellent</td>
                        </tr>
                        <tr>
                            <td>English</td>
                            <td>25</td>
                            <td>60</td>
                            <td>85</td>
                            <td>A</td>
                            <td>Excellent</td>
                        </tr>
                        <tr>
                            <td>Basic Science</td>
                            <td>30</td>
                            <td>70</td>
                            <td>100</td>
                            <td>A</td>
                            <td>Outstanding</td>
                        </tr>
                        <tr>
                            <td>Agric Science</td>
                            <td>22</td>
                            <td>55</td>
                            <td>77</td>
                            <td>B</td>
                            <td>Good</td>
                        </tr>
                        <tr>
                            <td>Social Studies</td>
                            <td>26</td>
                            <td>64</td>
                            <td>90</td>
                            <td>A</td>
                            <td>Excellent</td>
                        </tr>
                        <tr>
                            <td>History</td>
                            <td>20</td>
                            <td>50</td>
                            <td>70</td>
                            <td>B</td>
                            <td>Very Good</td>
                        </tr>
                        <tr>
                            <td>Geography</td>
                            <td>27</td>
                            <td>66</td>
                            <td>93</td>
                            <td>A</td>
                            <td>Excellent</td>
                        </tr>
                        <tr>
                            <td>Economics</td>
                            <td>23</td>
                            <td>58</td>
                            <td>81</td>
                            <td>B</td>
                            <td>Very Good</td>
                        </tr>
                        <tr>
                            <td>Computer Science</td>
                            <td>29</td>
                            <td>68</td>
                            <td>97</td>
                            <td>A</td>
                            <td>Outstanding</td>
                        </tr>
                        <tr>
                            <td>Physical Education</td>
                            <td>30</td>
                            <td>65</td>
                            <td>95</td>
                            <td>A</td>
                            <td>Excellent</td>
                        </tr>
                        <tr>
                            <td>Art</td>
                            <td>24</td>
                            <td>55</td>
                            <td>79</td>
                            <td>B</td>
                            <td>Good</td>
                        </tr>
                        <tr>
                            <td>Music</td>
                            <td>26</td>
                            <td>60</td>
                            <td>86</td>
                            <td>B</td>
                            <td>Very Good</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            </div>
        </AuthenticatedLayout>
    );
}
