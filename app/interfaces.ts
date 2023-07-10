export interface QuestionProps {
    question: string;
    answer: string;
}

export interface ImageProps {
    desktopSrc: string;
    mobileSrc: string;
    alt: string;
    box: string;
}

export interface FAQProps {
    question: string;
    answer: string;
    isActive: string;
    handleClick: () => void;
}
