export type QuestionProps = {
    question: string;
    answer: string;
}

export type ImageProps = {
    desktopSrc: string;
    mobileSrc: string;
    alt: string;
    box: string;
}

export type FAQProps = {
    question: string;
    answer: string;
    isActive: string;
    handleClick: () => void;
}
