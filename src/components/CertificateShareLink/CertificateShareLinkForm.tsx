import React, { Component, FunctionComponent, ReactNode } from "react";
import { QRCode } from "react-qr-svg";
import { connect } from "react-redux";
import { RootState } from "../../reducers";
import { getShareLinkState } from "../../reducers/certificate.selectors";

interface CertificateShareLinkFormProps {
  copiedLink: boolean;
  shareLink: {
    id?: string;
    key?: string;
  };
  shareLinkState: string;
  handleCopyLink: (link: string) => void;
  handleShareLinkToggle: () => void;
}

// TODO refactor completely this component
class CertificateShareLinkForm extends Component<CertificateShareLinkFormProps> {
  render(): ReactNode {
    const { shareLink, shareLinkState, copiedLink, handleCopyLink, handleShareLinkToggle } = this.props;

    const certificateLink = shareLink && `${window.location.origin}/?documentId=${shareLink.id || ""}#${shareLink.key}`;
    return (
      <div className="text-center">
        <h3 className="mb-2">Partagez votre certificat</h3>
        {shareLinkState === "INITIAL" ? (
          <Loader />
        ) : (
          <>
            {shareLink.id && shareLink.key !== undefined ? (
              <>
                <p>Partagez ce certificat en copiant le lien ci-dessous.</p>
                <p>
                  <small>
                    * Remarque: ce lien expirera automatiquement dans<b>14 jours</b>.
                  </small>
                </p>
                <div className="flex flex-wrap w-full">
                  <input
                    className="flex-1 border p-2"
                    value={certificateLink}
                    onClick={() => handleCopyLink(certificateLink)}
                    placeholder="Certificate link"
                    readOnly
                  />
                  <button
                    type="button"
                    className="ml-2 button bg-black bg-opacity-25 text-white hover:bg-opacity-50"
                    onClick={() => handleCopyLink(certificateLink)}
                  >
                    Copy
                  </button>
                </div>
                {copiedLink && (
                  <p>
                    <small className="text-green">Lien de partage copi?? avec succ??s!</small>
                  </p>
                )}
                <div className="w-full my-4">
                  <QRCode level="H" className="w-40 mx-auto" value={certificateLink} />
                </div>
              </>
            ) : (
              <div id="error-message" className="row justify-content-center my-5 text-red">
                <i id="verify-invalid" className="fas fa-times-circle fa-2x" />{" "}
                <p className="align-middle ml-2 mt-1">Impossible de g??n??rer le lien de partage.</p>
              </div>
            )}
          </>
        )}
        <button type="button" className="button bg-navy text-white hover:bg-navy-300" onClick={handleShareLinkToggle}>
          Fermer
        </button>
      </div>
    );
  }
}

const Loader: FunctionComponent = () => (
  <>
    <i className="fas fa-spinner fa-pulse fa-2x mt-4" />
    <p className="my-4">G??n??rer un lien de partage...</p>
  </>
);
export const CertificateShareLinkFormContainer = connect(
  (store: RootState) => ({
    shareLinkState: getShareLinkState(store),
  }),
  () => ({}) // added this back otherwise there is a type issue in CertificateViewer
)(CertificateShareLinkForm);
