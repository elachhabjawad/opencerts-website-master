import React from "react";
import Link from "next/link";

const date = new Date();

const DocumentCertificate = () => (
  <section>
    <div className="container">
      <div className="row shadow p-3 mb-5 bg-white rounded mt-3">
        <div className="col-md-1">
          <img src="/static/images/aboutsection/genuine.svg" />
        </div>
        <div className="col-md-4">
          <h6 className="text-success font-weight-bold mt-3">
            Document délivré par : Agence Nationale de la Conservation Foncière, du Cadastre et de la Cartographie
          </h6>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Link href="/">
            <a className="btn btn-outline-primary float-right">Retour à l'accueil</a>
          </Link>
        </div>
      </div>
      <div className="row mt-5 mb-5 justify-content-center">
        <div className="col-md-7 border border-secondary border-10">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-3 p15 mt-4">
                <h5> المملكة المغربية</h5>
                <h5>Royaume du Maroc</h5>
              </div>
            </div>
           
            <div className="row justify-content-center mt-4">
              <div className="col-md-4">
                <p className="p15 float-left">Agence Nationale de la Conservation Foncière, du Cadastre et de la Cartographie</p>
              </div>
              <div className="col-md-4">
                <img src="static/images/logo.png" width="60%" height="30%" className=" ml-4 text-center" />
              </div>
              <div className="col-md-4">
                <p className="p15 float-rigth">
                  الوكالة الوطنية للمحافظة العقارية و المسح العقاري و الخرائطية
                </p>
              </div>
            </div>
            <div className="row justify-content-center mt-5 mb-5">
              <div className="col-md-12 mb-5">
                <h3 className="text-center  mb-5 ">Attestation sur l’honneur de propriété</h3>
                <p className="p15">
                  Je soussigné(e) xxxxxxxxxxxxxxxxx
                  <br />
                  demeurant à xxxxxxxxxxxxxxxxx
                  <br />
                  atteste sur l’honneur être propriétaire de la maison concernée par les travaux d’investigations de
                  cavités souterraines. Celle-ci est localisée à l’adresse ci-dessus, sur la parcelle ayant pour
                  référence cadastrale le numéro xxxxxxxxxxxxxxxxx
                </p>
                <p className="p15">
                  J’ai pris connaissance des sanctions pénales encourues par l’auteur d’une fausse déclaration
                </p>
                <p className="p15">Fait à xxxxxxxxxxxxxxxxx, le xxxxxxxxxxxxxxxxx</p>
                <p className="p15 mb-8 mt-5 ">Signature : xxxxxxxxxxxxxxxxx</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DocumentCertificate;
