import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import { Textarea } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
export function RegisterParentSection() {
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        parent_name: "",
        class: "",
        phone_number: "",
        address: "",
    });

    const submitForm = (e) => {
        e.preventDefault();

        post("/register-student", {
            onFinish: () =>
                reset(
                    "name",
                    "email",
                    "parent_name",
                    "class",
                    "phone_number",
                    "address",
                ),
        });
    };
    return (
        <>
            <section id="register-parent-section" className="tab-content">
                <section className="admin-section">
                    <h2>Register Parent</h2>
                    <form onSubmit={submitForm} id="parent-registration-form">
                        <InputLabel htmlFor="parent_name">
                            Parent Name
                        </InputLabel>
                        <TextInput
                            type="text"
                            id="parent-name"
                            name="parent_name"
                            value={data.parent_name}
                            onChange={(e) =>
                                setData("parent_name", e.target.value)
                            }
                            required
                        />

                        <InputLabel htmlFor="email">Email</InputLabel>
                        <TextInput
                            type="email"
                            id="parent-email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />

                        <InputLabel htmlFor="child-name">Child Name</InputLabel>
                        <TextInput
                            type="text"
                            id="child-name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />

                        <InputLabel htmlFor="child-class">
                            Child Class
                        </InputLabel>
                        <TextInput
                            type="text"
                            id="child-class"
                            name="class"
                            value={data.class}
                            onChange={(e) => setData("class", e.target.value)}
                            required
                        />

                        <InputLabel htmlFor="parent-phone">
                            Phone Number
                        </InputLabel>
                        <TextInput
                            type="tel"
                            id="parent-phone"
                            name="phone_number"
                            value={data.phone_number}
                            onChange={(e) =>
                                setData("phone_number", e.target.value)
                            }
                            required
                        />

                        <InputLabel htmlFor="parent-address">
                            Address
                        </InputLabel>
                        <Textarea
                            id="parent-address"
                            name="address"
                            value={data.address}
                            onChange={(e) => setData("address", e.target.value)}
                            rows="3"
                            required
                        ></Textarea>

                        <PrimaryButton disabled={processing}>
                            Register Parent
                        </PrimaryButton>
                    </form>
                </section>
            </section>
        </>
    );
}
