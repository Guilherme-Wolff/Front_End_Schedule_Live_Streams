import { StrictMode } from "react"

const Perfil = (width: string, height: string) => {

    return (
        <div className="css-jfvs5e-DivTabContainer e70cq5v2">
            <a
                data-e2e="profile-icon"
                className="e70cq5v1 css-6yb2an-StyledLink-StyledFooterItemLink er1vbsz0"
                href="/@witcher991"
                style={{ paddingBottom: '17px' }}
            >
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 48 48"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fillOpacity: 0.75 }}
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.0001 11.5C20.9625 11.5 18.5001 13.9624 18.5001 17C18.5001 20.0376 20.9625 22.5 24.0001 22.5C27.0377 22.5 29.5001 20.0376 29.5001 17C29.5001 13.9624 27.0377 11.5 24.0001 11.5ZM15.5001 17C15.5001 12.3056 19.3057 8.5 24.0001 8.5C28.6945 8.5 32.5001 12.3056 32.5001 17C32.5001 21.6944 28.6945 25.5 24.0001 25.5C19.3057 25.5 15.5001 21.6944 15.5001 17ZM24.0001 30.5C19.1458 30.5 15.0586 33.7954 13.8578 38.2712C13.7147 38.8046 13.2038 39.1741 12.6591 39.0827L11.6729 38.9173C11.1282 38.8259 10.7571 38.3085 10.8888 37.7722C12.3362 31.8748 17.6559 27.5 24.0001 27.5C30.3443 27.5 35.664 31.8748 37.1114 37.7722C37.2431 38.3085 36.872 38.8259 36.3273 38.9173L35.3411 39.0827C34.7964 39.1741 34.2855 38.8046 34.1424 38.2712C32.9416 33.7954 28.8544 30.5 24.0001 30.5Z"
                    />
                </svg>
                <div className="css-1f6106s-DivText e70cq5v3" style={{ color: '#fff', opacity: 0.75 }}>
                    Perfil
                </div>
            </a>
        </div>

    );
}