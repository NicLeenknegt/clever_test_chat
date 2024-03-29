import React from "react";
import './TabContainer.css'


interface IHash {
    [etails:string] : React.ReactElement
}

interface TabContainerProps {
    hash:IHash
}

interface TabContainerState {
    key:string
}

export class TabContainer extends React.Component<TabContainerProps,TabContainerState> {

    /**
     *
     */
    constructor(props:TabContainerProps) {
        super(props);
        if (Object.keys(this.props.hash).length > 0)
            this.state = {
                key: Object.keys(this.props.hash)[0]
            }
    }

    private handleClick(key:string) {
        this.setState({
            key:key
        })
    }

    public render() {
        return (
            <div className="tab_container">
                <div>
                    <div id="material-tabs">
                        {
                            Object.keys(this.props.hash).map((key, index) => {
                                return <a key={index} className={key === this.state.key?"active":""} onClick={e => this.handleClick(key)} >{key}</a>
                            } )
                        }
                    </div>
                </div>
                <div className="tab-content">
                    {
                        this.props.hash[this.state.key]
                    }
                </div>

            </div>

        )
    }
}