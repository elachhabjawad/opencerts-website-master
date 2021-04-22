import React from "react";

interface DefaultViewProps {
  fileError: boolean;
}

export const DefaultView: React.FunctionComponent<DefaultViewProps> = ({ fileError }) => (
  <>
    <div className="mx-auto mb-4" style={{ width: "120px" }}>
      <img alt=".opencert Dropzone" src="/static/images/dropzone/dropzone_illustration.svg" />
    </div>
    {fileError && (
      <p className="text-pink mb-2">le document ne peut pas être lu. Veuillez vérifier que vous disposez le document valide</p>
    )}
    <h4 className="font-source-sans-pro text-gray-900 mb-2">Faites glisser et déposez votre  document</h4>
    <div className="text-gray-600">
      <p>pour voir son contenu</p>
      <div className="flex flex-wrap items-center justify-center my-3">
        <div className="w-1/3">
          <hr />
        </div>
        <div className="w-auto px-8">
          <p>ou</p>
        </div>
        <div className="w-1/3">
          <hr />
        </div>
      </div>
    </div>
    <div className="mx-auto">
      <button
        type="button"
        className="button bg-white hover:bg-blue text-blue hover:text-white border border-solid border-blue"
      >
        Selectionner document
      </button>
    </div>
  </>
);
