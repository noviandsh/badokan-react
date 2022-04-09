import { useRouter } from "next/router"
import { useState } from "react"
import API_ENDPOINT from "../../pages/api/api-endpoint"
import Swal from "sweetalert2"

export default function ReviewForm({ getCustomerReviews }) {
    const route = useRouter()
    const { id } = route.query
    const [errorMsg, setErrorMsg] = useState("")
    const [form, setForm] = useState({
        id: id,
        name: "",
        review: ""
    })

    const submitReview = async () => {
        await fetch(API_ENDPOINT.ADD_REVIEW, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
            .then((res) => res.json())
            .then((resJson) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil',
                    text: 'Ulasan berhasil ditambahkan',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        getCustomerReviews(resJson.customerReviews)
                    },
                    willClose: () => {
                        setForm({ ...form, name: "", review: "" })
                    }
                });
            })
            .catch(() => {
                if (!window.navigator.onLine) {
                    Swal.fire(
                        'Gagal menambahkan ulasan',
                        'pastikan koneksi internet anda tersambung!',
                        'error',
                    );
                } else {
                    Swal.fire(
                        'Gagal menambahkan ulasan',
                        '',
                        'error',
                    );
                }
            });
    }

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setErrorMsg("")
    }

    const handleSubmitClick = () => {
        if (form.name.trim() === "" && form.review.trim() === "") {
            setErrorMsg("Nama dan Ulasan tidak boleh kosong")
        }
        else if (form.review.trim() === "") {
            setErrorMsg("Ulasan tidak boleh kosong")
        }
        else if (form.name.trim() === "") {
            setErrorMsg("Nama tidak boleh kosong")
        }
        else {
            setForm(form)
            submitReview()
        }
    }
    return (
        <div id="review-form">
            <h3>Beri ulasan</h3>
            <div>
                <label htmlFor="name">Nama</label>
                <input id="name" name="name" type="text" placeholder="masukkan nama anda" value={form.name} onChange={handleInputChange} />
                <label htmlFor="review">Ulasan</label>
                <textarea id="review" name="review" rows="4" placeholder="masukkan ulasan anda" value={form.review} onChange={handleInputChange}></textarea>
                {errorMsg && <><span id="form-alert">{errorMsg}</span><br /></>}
                <button onClick={handleSubmitClick} id="submit-review">Kirim</button>
            </div>
        </div>
    )
}
