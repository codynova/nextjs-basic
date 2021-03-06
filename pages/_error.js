import { Box } from '@/components/Box'

const Error = ({ statusCode }) => (
    <Box>
        {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'
        }
    </Box>
)

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
