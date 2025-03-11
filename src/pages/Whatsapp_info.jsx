import React from 'react'
import { Link } from "react-router"

function Whatsapp_info() {
    return (
        <div>
            <section>
                <div class="container mt-5">
                    <div class="card8 shadow p-4">
                        <div class="card-header">
                            <h4>Contact Our Travel Agent via WhatsApp</h4>
                        </div>
                        <div class="card-body">
                            <form id="whatsappForm">
                                <div class="mb-3">
                                    <label for="name" class="form-label">Your Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter your name" />
                                    <small class="error d-none">This field is required.</small>
                                </div>
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Your WhatsApp Number</label>
                                    <input type="text" class="form-control" id="phone" placeholder="Enter your WhatsApp number" />
                                    <small class="error d-none">This field is required.</small>
                                </div>
                                <div class="mb-3">
                                    <label for="message" class="form-label">Your Message</label>
                                    <textarea class="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
                                    <small class="error d-none">This field is required.</small>
                                </div>
                                <button type="button" class="btn btn-success" id="sendMessageBtn">Send via WhatsApp</button>
                            </form>
                        </div>
                    </div>
                    <br />
                </div>
            </section>

        </div>
    )
}

export default Whatsapp_info
