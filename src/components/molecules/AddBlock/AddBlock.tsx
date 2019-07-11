import * as React from "react";


export default class Task extends React.Component<any, any> {
    constructor(props : any) {
        super(props);
        this.state = {
            width : "",
            height : "",
            name : "",
            addBlock : this.props.addBlock,
            changeLink : this.props.changeLink,
            link: "https://" 
        };
        this.handleWidthChange = this.handleWidthChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleLinkChange = this.handleLinkChange.bind(this);
        this.handleLinkInputChange = this.handleLinkInputChange.bind(this);
    }
    handleWidthChange(event: any) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            width: value
        });
    }
    handleHeightChange(event: any) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            height: value
        });
    }
    handleNameChange(event: any) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            name: value
        });
    }
    handleAdd(event: any) {
        this.state.addBlock(this.state.width,this.state.height,this.state.name)
    }
    handleLinkInputChange(event: any) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            link: value
        });
    }
    handleLinkChange(event: any) {
        this.state.changeLink(this.state.link)
    }

    public render() {
        return (
            <div className="controlBlock">

                <div className="AddInputs">
                        <label>Add View</label>
                    <div className="inputBlock">
                        <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/>
                    </div>
                    <div className="inputBlock">
                        <input type="number" placeholder="Width" value={this.state.width} onChange={this.handleWidthChange}/>
                    </div>
                    <div className="inputBlock">
                        <input type="number" placeholder="Height" value={this.state.height} onChange={this.handleHeightChange}/>
                    </div>
                    <button onClick={this.handleAdd}>Add</button>
                </div>
                <div className="linkInputs">
                    <div className="inputBlock">
                        <label>Link</label>
                        <input type="text" value={this.state.link} onChange={this.handleLinkInputChange}/>
                    </div>
                    <button onClick={this.handleLinkChange}>Set</button>
                </div>
            </div>
        );
    }
}

        