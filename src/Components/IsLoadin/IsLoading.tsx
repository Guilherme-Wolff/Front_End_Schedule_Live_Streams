import { Oval } from 'react-loader-spinner'

export default function IsLoading() {
    return (
        <Oval
            ariaLabel="loading-indicator"
            height={40}
            width={40}
            strokeWidth={5}
            strokeWidthSecondary={1}
            color="white"
            secondaryColor="white"
        />
    )
}
