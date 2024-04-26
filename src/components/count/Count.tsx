
interface CountProps {
    count: number; 
    addBtn: () => void;
    subBtn: () => void; 
}
const Count: React.FC <CountProps> = ({subBtn,addBtn,count}) => {
    
    return (
        <div className="count">
            <div className="sub" onClick={subBtn}>-</div>
            <p>{count}</p>
            <div className="plus" onClick={addBtn}>+</div>
        </div>
    );
};

export default Count;
