import React from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Link,
} from "@react-pdf/renderer";
import { Head } from "@inertiajs/react";

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        color: "#3f3f3f",
        // marginLeft: '5.7mm',
        // marginTop: '12.5mm',
    },
    section: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginTop: '11.6mm',
        marginRight: 10,
        marginBottom: 0,
        marginLeft: '5.7mm',
        paddingTop: 0,
        paddingRight: 10,
        paddingBottom: 0,
        paddingLeft: 0,
        flexGrow: 1,
    },
    etiqueta: {
        width: '33mm',
        height: '17mm',
        // marginRight: '2mm',
        // marginBottom: '0.5mm',
        // paddingTop: '0.5mm',
        border: 0,
        borderColor: '#666',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textmd: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    textxs: {
        fontSize: 8,
    },
    viewer: {
        width: window.innerWidth, //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
    },
});

const Printer = ({ etiquetas }: any) => {
    return (
        <>
        <Head title="Etiquetas" />
               <PDFViewer style={styles.viewer}>

            {/* Start of the document*/}
            <Document>
                {/*render a single page*/}
                <Page size="A4" style={styles.page}>

                    <View style={styles.section}>
                        {etiquetas.map((etiqueta: any) => (
                            <View key={etiqueta.ordem} style={styles.etiqueta}>
                                <View style={styles.textxs}>
                                    <Text>{etiqueta.empresa}</Text>
                                </View>
                                <View style={styles.textmd}>
                                    <Text>{("00000000" + (etiqueta.ordem)).slice(-8)}</Text>
                                </View>
                                <View style={styles.textxs}>
                                    <Text>{etiqueta.telefone}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </Page>
            </Document>
        </PDFViewer> 
        </>

    );
};

export default Printer;
