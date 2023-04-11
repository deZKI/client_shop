import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const TagBar = observer(() => {
    const {product} = useContext(Context)
    return (
        <ListGroup>
            {product.tags.map(type =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={type.id === product.selectedTag.id}
                    onClick={() => product.setSelectedTags(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TagBar;