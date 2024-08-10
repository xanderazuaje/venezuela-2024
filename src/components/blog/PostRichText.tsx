import { Fragment } from "preact";
import escapeHTML from "escape-html";
import { Text } from "slate";
import {cmsUrl} from "@/constants/cms.ts";

const serialize = (children: Array<any>) => {
    return children.map((node, i) => {
        if (Text.isText(node)) {
            let text = (
                <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
            );

            if (node.bold) {
                text = <strong key={i}>{text}</strong>;
            }

            if (node.code) {
                text = <code key={i}>{text}</code>;
            }

            if (node.italic) {
                text = <em key={i}>{text}</em>;
            }

            if (node.text === '') {
                text = <br />;
            }

            // Handle other leaf types here...

            return <Fragment key={i}>{text}</Fragment>;
        }

        if (!node) {
            return null;
        }

        switch (node.type) {
            case "h2":
                return <h2 class="text-custom-red font-bold text-2xl" key={i}>{serialize(node.children)}</h2>;
            case "h3":
                return <h3 class="font-bold text-xl" key={i}>{serialize(node.children)}</h3>;
            case "h4":
                return <h4 class="font-bold text-lg" key={i}>{serialize(node.children)}</h4>;
            case "blockquote":
                return <blockquote class="pl-6 py-4 border-l-2 border-[#C1C1C1] bg-[#F2F2F2] my-6 italic" key={i}>{serialize(node.children)}</blockquote>;
            case "link":
                return (
                    <a class="text-custom-red underline" href={node.url} key={i}>
                        {serialize(node.children)}
                    </a>
                );
            case "upload":
                return (
                    <figure class="w-4/5 m-auto">
                        <img src={cmsUrl + node.value.url} alt={node.value.alt}/>
                        <figcaption class="italic text-[#3A3A3A]">{node.value.alt}</figcaption>
                    </figure>
                )

            default:
                return <p key={i}>{serialize(node.children)}</p>;
        }
    });
}
const Serialize = ({content}: {content: Array<any>}) => {
    return serialize(content)
}

export default Serialize