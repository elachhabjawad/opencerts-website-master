import React from "react";


const About = () => (
    <section className="bg-blue-100 py-20">
        <div className="container">
            <h2 className="font-montserrat mb-12 pl-8 border-l-4 border-orange">Résumé exécutif " Certification des documents via la blockchain "</h2>
            <div className="bg-white rounded shadow-md p-8">


                <div className="row justify-content-center">
                    <div className="col-md-4"><img src="/static/images/document-verification_lrs.png" width="80%" /></div>
                    <div className="col-md-6"><p className="text-justify">La solution décrite illustre comment une Blockchain peut résoudre le problème existant de vérification de la validité des actifs numériques tels qu'une photo de votre certificat de naissance, un document pdf indiquant votre testament ou un document juridique signé spécifiant une transaction commerciale de manière très efficace et à un prix très bas. coût de mise en œuvre. Cet exemple montre également que la solution repose sur un certain nombre de technologies non liées à la Blockchain et que la Blockchain n'est utilisée que pour une tâche très spécifique de stockage des signatures numériques d'actifs qui prouvent leur validité.</p>
                     <p className="text-justify">En raison des caractéristiques de la Blockchain (registre d'informations décentralisé permanent), ces signatures numériques sont accessibles à tous. Ainsi, toute personne ayant accès à la Blockchain peut désormais vérifier l'authenticité d'un actif numérique sans avoir à compter sur des intermédiaires de confiance.</p>  
                     <p className="text-justify">La Blockchain n'est pas la solution au problème des actifs numériques signés. Il joue plutôt un rôle petit mais important dans cette solution proposée.</p> 
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default About
