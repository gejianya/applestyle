import { Giscus } from '@giscus/react'
import { FC } from 'react'

type GiscusComponentProps = {
    theme : "light" | "dark"
}

const GiscusComponent: FC<GiscusComponentProps> = ({ theme }) => {
    return (
        <Giscus
            src="https://giscus.app/client.js"
            repo="gejianya/blogcomments"
            repoId="R_kgDOIQVyUg"
            category="Comments"
            categoryId="DIC_kwDOIQVyUs4CSIo6"
            mapping="pathname"
            reactionsEnabled="1"
            emitMetadata="0"
            theme={ theme }
        />
    )
}

export default GiscusComponent
