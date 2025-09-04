const { useEffect, useState, useMemo } = require("react");

const vidhi = () => {

    useState[count, setCount] = useState(0);

    function computeIntensive() {
        for(let i=0;i<1e9;i++) {}
        return 1+count;
    }

    const memoizedValue = useMemo(() => {
        return computeIntensive();
    }, [count]);

    const increment = () => {
        setCount(count + 1);
        console.log(count + 1);
    }
    //componentDidMount
    useEffect(() => {
        console.log("Component Mounted");
        return () => {
            console.log("Component Unmounded");
        }
    }, []);

    //componentDidUpdate
    useEffect (() => {
        console.log("Count Updated" ,count);
    }, [count]);


    //useCallback
    
    const incrementMem = useCallback (() => {
        increment();
    }, [count]);

    return(
        <>
            <child
            func={incrementMem}
            />
            {memoizedValue}
        </>
    ); 

}