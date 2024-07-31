type LoaderAction = {
    title: string;
    to: string;
}

export type LoaderProps = {
    title: string;
    type?: 'page' | 'section';
    action?: LoaderAction;
}