import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import React from "react";
import { Person } from "../models/person.model";

const Contact: React.FC<{person: Person}> = ({person}) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>
                    {person.firstName}{person.lastName}
                </IonCardTitle>
                <IonCardSubtitle>
                    {person.country}
                </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                Email: {person.email}<br/>
                Phone: {person.phone}
            </IonCardContent>
        </IonCard>
    )
}

export default Contact;