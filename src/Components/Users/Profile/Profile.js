import React, { useEffect, useState } from "react";
import { apiMe, getUser } from "../../API";
import "./profile.css";

function Profile() {
  const [user, setuser] = useState();

  useEffect(() => {
    apiMe().then((response) => {
      console.log(response);
      if (response.status === 200) {
        getUser(response.data.id).then((res) => setuser(res.data));
      } else;
    });
  }, []);

  if (user) {
    return (
      <div id="main_profile">
        <div className="container">
          <div className="main-body">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://100k-faces.glitch.me/random-image"
                      alt="Admin"
                      className="rounded-circle"
                    />
                    <div className="mt-3">
                      <h4>{user.role}</h4>
                      <p className="text-muted font-size-sm">{user.role}</p>

                      {/* <button className="btn btn-outline-primary">
                        Change Photo
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>

                    <div className="col-sm-9 text-secondary">{user.name}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{user.email}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {user.phone_number}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Gym Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">HYPEGYM</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {user.address}
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
