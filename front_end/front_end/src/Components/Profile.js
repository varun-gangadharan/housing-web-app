import { useState } from 'react';
import "../App.css"

export default function UserProfile(){
    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <div className="card">
                <img src="img.jpg" alt="John" style={{ width: "100%" }} />
                <h1>John Doe</h1>
                <p className="details">example &amp; example, Example</p>
                <p>phone number</p>
        <p>
          <button>Contact</button>
        </p>
      </div>
    </div>
    );
}