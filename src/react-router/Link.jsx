import { useNavigate } from "./hooks";

export default function Link(props) {
    const { to, children, style } = props;
    const navigate = useNavigate();
    const handle = (e) => {
        e.preventDefault();
        navigate(to);
    }
    return (
        <a href={to} style={style || {}} onClick={handle}>{children}</a>
    );
}