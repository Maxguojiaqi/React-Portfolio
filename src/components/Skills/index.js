import React from "react";

function Skills() {
  return (
    <div>
    <hr className="m-0"/>

    <section className = "mt-5" id="skills">
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className="fab fa-html5"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-css3-alt"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-js-square"></i>
          </li>

          <li className="list-inline-item">
            <i className="fab fa-node-js"></i>
          </li>

          <li className="list-inline-item">
            <i className="fab fa-python"></i>
          </li>
        </ul>

        <div className="subheading mb-3">Enterprise and Open Source Products</div>
        <figure className="figure">
          <img src="./img/esri.png" className="figure-img img-fluid rounded" alt="ArcGIS"/>
          <figcaption className="figure-caption">ArcGIS Prducts</figcaption>
        </figure>
        <figure className="figure">
          <img src="./img/osgeo.png" className="figure-img img-fluid rounded" alt="OSGEO"/>
          <figcaption className="figure-caption">Open Source Geospatial</figcaption>
        </figure>
        <figure className="figure">
          <img src="./img/azure.png" className="figure-img img-fluid rounded" alt="Azure"/>
          <figcaption className="figure-caption">Azure Web Services</figcaption>
        </figure>
        <figure className="figure">
          <img src="./img/aws.png" className="figure-img img-fluid rounded" alt="AWS"/>
          <figcaption className="figure-caption">Amazon Web Services</figcaption>
        </figure>
      </div>
    </section>


    </div>
  );
}

export default Skills;
