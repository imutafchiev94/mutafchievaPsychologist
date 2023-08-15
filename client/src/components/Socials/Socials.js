import React, { useState } from "react";
import "./Socials.css";


function Socials() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [alert, setAlert] = useState(true);
    

    const sendEmail = event => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({firstName: firstName, lastName: lastName, email: email, message: message})
        };
        fetch('http://localhost:8080/api/comingsoon/', requestOptions)
        .then(response => response.json())
        .then(data => setResponse(data.Message));

        setFirstName('');
        setLastName('');
        setMessage('');
        setEmail('');
        setAlert(false);

    }

    const removeModalBackdrop = () => {
       let div = document.getElementsByClassName('modal-backdrop')[0]
       div.parentNode.removeChild(div);
    }

    return (
        <div className="socials">
            <div className="alert alert-success alert-dismissible fade show" hidden={alert} role="alert">
                {response}
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setAlert(true)}></button>
            </div>
            <h5>Можете да ме откриете в социалните мрежи за повече информация</h5>
            <a href="https://www.facebook.com/profile.php?id=100063631506061">
                <button>
                    <img width="55" height="55" src="https://img.icons8.com/color/48/facebook.png" alt="facebook" />
                </button>
            </a>
            <a href="https://www.instagram.com/mutafchieva_psychologist_/">
                <button>
                    <img width="55" height="55" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new" />
                </button>
            </a>
            <button type="button" className="email" data-bs-toggle="modal" data-bs-target="#sendEmail" onClick={removeModalBackdrop}>
                <img width="55" height="55" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new" />
            </button>
            <div className="modal fade" id="sendEmail" 
            tabIndex="1"  
            data-bs-keyboard="false"  
            aria-labelledby="sendEmailLabel"
            aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="sendEmailLabel">Изпратете ми email!</h5>
                            <button type="button" className="btn-close"  data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">Име</label>
                                    <input type="text" name="firstName" className="form-control" id="firstName" onChange={event => setFirstName(event.target.value)} value={firstName} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Фамилия</label>
                                    <input type="text" name="lastName" className="form-control" id="lastName" onChange={event => setLastName(event.target.value)} value={lastName} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" name="email" className="form-control" id="email" onChange={event => setEmail(event.target.value)} value={email} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Съобщение</label>
                                    <textarea name="message" className="form-control" id="message" rows="3" onChange={event => setMessage(event.target.value)} value={message} />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={sendEmail}>
                                        Изпрати
                                    </button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                        Затвори
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Socials;
