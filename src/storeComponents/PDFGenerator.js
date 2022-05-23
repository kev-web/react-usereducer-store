import React from 'react'
import {v4 as uuidv4} from "uuid";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import CartPDFModal from './CartPDFModal';

//Using 'jspdf' and 'autoTable' plugin to genera


const PDFGenerator = (props) => {

    //Generate a PDF file of the cart:
    const generatePDF = (cName, cPhone, cCity, cPayment, cCash, cDelivery, cComments) => {
        //Date and Time when user clicked button:
        const currentDate = new Date();
        const pdfId = uuidv4();
        
        //pdf basic settings:
        const unit = "pt";
        const size = "A4"
        const orientation = "portrait";
    
        //initialize an instance of jsPDF:
        const doc = new jsPDF(orientation, unit, size);
        const imglogo = new Image()
        imglogo.src = 'https://source.unsplash.com/8At6XBgVyyY'
        doc.addImage(imglogo, 'jpg', 505, 40, 50, 50)

        //JS code to get the body:
        let currentProducts = [...props.mainState.products]
        let currentCartItems = [...props.mainState.cart]

        let selectedProducts = []

        currentProducts.forEach(item=>{
            if(item.addedToCart === true){
                selectedProducts.push(item)
            }
        })

        const finalData = selectedProducts.map(elem=>{
            //calculate quantity:
            let itemQuantity = currentCartItems.filter(item=>item.id === elem.id).length
            //calculate subtotal:
            let itemSubtotal = currentCartItems.filter(prod=>prod.id === elem.id).length*elem.price;
            //return a body row:
            return [elem.name, itemQuantity, `$${elem.price}`, `$${itemSubtotal.toFixed(2)}`]
        })

        //taxes and total:
        let cashChange = parseFloat(cCash - props.mainState.totalToPay).toFixed(2);

        //pdf settings:
        doc.setFont('Courier')
        // doc.setFontSize(18);
        // doc.setTextColor('#0077b6');
        
        doc.text(`Id: ${pdfId}`, 40, 70).setFontSize(12).setTextColor('black');
        doc.text('INVOICE REPORT', 455, 110).setFontSize(12).setTextColor('black');
        doc.text(`Date: ${currentDate.toLocaleDateString()}`, 40, 100).setFontSize(12).setTextColor('black');
        doc.text(`Time: ${currentDate.toLocaleTimeString()}`, 40, 115).setFontSize(12).setTextColor('black');
        doc.text(`Customer Name: ${cName}`, 40, 145).setFontSize(12).setTextColor('black');
        doc.text(`Customer Phone: ${cPhone}`, 40, 160).setFontSize(12).setTextColor('black');
        doc.text(`Customer City: ${cCity}`, 40, 175).setFontSize(12).setTextColor('black');
        doc.text('Delivery Method:', 40, 500).setFontSize(18).setTextColor('black')
        doc.text(`${cDelivery}`, 165, 500).setFontSize(28).setTextColor('black');

        doc.line(40,195,555,195, 'F');
        doc.line(40,770,555,770, 'F');
        doc.setLineWidth(2);

        let content = {
            head: [["Item", "Quantity", "Price", "Item Total"]],
            // columns: [
            //     {header:'ITEM',dataKey:'item'},
            //     {header:'QUANTITY', dataKey:'quantity'},
            //     {header:'PRICE',dataKey:'price'},
            //     {header:'SUBTOTAL',dataKey:'subtotal'}],
            body: finalData,
            // foot: [['', '', 'Total:', `$${mainState.totalToPay}`]],
            margin: 40,
            tableLineWidth: 0.5,
            tableLineColor: "black",
            tableWidth: 'auto',
            startY: 215,
            theme: 'striped',
            pageBreak: 'auto',
            styles: {
                halign: 'center',
                fontSize: 10,
                cellPadding: 3.5,
                font: 'courier',
                fontStyle: 'normal',
                textColor: 'black',
                fillColor: "#fefae0"
            },
            bodyStyles: {
                halign: 'center'
            },
            headStyles: {
                halign: 'center',
                fillColor: "#0077b6",
                fontSize: 12,
                textColor: "white",
                fontStyle: 'bold',
                lineColor: '#14213d',
                lineWidth: 0.5,
            },
            columnStyles: {
                0: {
                    halign: 'left',
                    lineColor: '#14213d',
                    lineWidth: 0.5,
                    fillColor: '#dee2e6',
                },
                1: {
                    halign: 'center',
                    lineColor: '#14213d',
                    lineWidth: 0.5,
                    fillColor: '#edf6f9',
                },
                2: {
                    halign: 'right',
                    lineColor: '#14213d',
                    lineWidth: 0.5,
                    fillColor: '#edf6f9',
                },
                3: {
                    halign: 'right',
                    lineColor: '#14213d',
                    lineWidth: 0.5,
                    fillColor: '#edf6f9',
                }
            }
        }

        let contentTotal = {
            head: [ ['Subtotal: ', `$${props.mainState.subTotalDue}`]],
            body: [
                    ['%15 Tax: ', `$ ${props.mainState.taxDueToPay}`], 
                    ['Payment Method: ', `${cPayment}`],
                    ['Cash Handed: ', `$${cCash}`], 
                    ['Cash Change: ', `$${cashChange}`]], 
            foot: [
                    ['TOTAL: ', `$${props.mainState.totalToPay}`]],
            margin: {left: 335},
            tableLineWidth: 0.5,
            tableLineColor: "black",
            tableWidth: 220,
            startY: 400,
            theme: 'striped',
            pageBreak: 'auto',
            styles: {
                halign: 'right',
                fontSize: 10,
                cellPadding: 3.5,
                font: 'courier',
                fontStyle: 'normal',
                textColor: 'black',
                fillColor: "#fefae0"
            },
            bodyStyles: {
                halign: 'right'
            },
            headStyles: {
                halign: 'right',
                fillColor: "#0077b6",
                fontSize: 12,
                textColor: "white",
                fontStyle: 'bold',
                lineColor: '#14213d',
                lineWidth: 0.5,
            },
            footStyles: {
                fillColor: "#9a031e",
                textColor: "white",
                fontSize: 12,
                halign: 'right',
                fontStyle: 'bold',
                lineColor: '#14213d',
                lineWidth: 0.5,
            },
            columnStyles: {
                0: {
                    halign: 'right',
                    lineColor: '#14213d',
                    lineWidth: 0.5,
                    fillColor: '#dee2e6',
                },
                1: {
                    halign: 'right',
                    lineColor: '#14213d',
                    lineWidth: 0.5,
                    fillColor: '#edf6f9',
                }
            }
        }

        let contentComments = {
            head: [['Comments:']],
            body: [[`${cComments}`]],
            margin: {left: 40},
            tableLineWidth: 0.5,
            tableLineColor: "black",
            tableWidth: 'auto',
            startY: 670,
            theme: 'striped',
            pageBreak: 'auto',
            styles: {
                halign: 'left',
                fontSize: 10,
                cellPadding: 3.5,
                font: 'courier',
                fontStyle: 'normal',
                textColor: 'black',
                fillColor: "#fefae0"
            },
            headStyles: {
                fillColor: "#f5cb5c",
                fontSize: 12,
                textColor: "black",
                fontStyle: 'bold',
                lineColor: '#14213d',
                lineWidth: 0.5,
            },
        }

        doc.autoTable(contentComments)

        doc.autoTable(content)
        doc.autoTable(contentTotal)
        doc.save(`report-${pdfId}`)
      }




    return (
        <div>
            <CartPDFModal customerDataSent={generatePDF} currentState={props.mainState}/>
        </div>
    )
    }

export default PDFGenerator;