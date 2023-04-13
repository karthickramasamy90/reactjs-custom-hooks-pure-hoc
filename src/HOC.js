const Container = (Component) => {
    return () => (
        <div>
                    <h2>Welcome to HOC Component</h2>
                    <Component />
        </div>
    )
}

export default Container;
