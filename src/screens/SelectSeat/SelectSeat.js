import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Svg, { Path } from 'react-native-svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const SelectSeat = ({ navigation }) => {
    // Function to get a random integer between min and max
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    // Updated seat layout to include types
    const generateSeatLayout = () => {
        const rows = 'ABCDEFGHIJK'.split(''); // Rows from A to K
        const seatLayout = rows.map(row => {
            return Array.from({ length: 15 }, (_, i) => {
                const seatNumber = `${row}${i + 1}`;
                let type = 'available';
                // Randomly select some seats as VIP or Regular
                if (Math.random() < 0.1) type = 'vip'; // 10% chance of VIP
                else if (Math.random() < 0.2) type = 'unavailable'; // 20% chance of Unavailable
                return { seat: seatNumber, type };
            });
        });
        return seatLayout;
    };

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [totalPrice, setTotalPrice] = useState(50);
    const [zoomLevel, setZoomLevel] = useState(1); // Initial zoom level

    // Sample seat layout (with types)
    const seatLayout = generateSeatLayout(); // Generate the seat layout

    const seatTypes = {
        selected: '#FFD700', // gold
        available: '#ADD8E6', // light blue
        vip: '#4B0082', // purple
        unavailable: '#D3D3D3', // light grey
    };

    const handleSeatSelection = (seat, type) => {
        if (type === 'unavailable') return; // Do nothing for unavailable seats

        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const calculateTotalPrice = () => {
        const vipPrice = 150;
        const regularPrice = 50;
        let price = 0;
        seatLayout.forEach(row => {
            row.forEach(({ seat, type }) => {
                if (selectedSeats.includes(seat)) {
                    price += type === 'vip' ? vipPrice : regularPrice;
                }
            });
        });
        setTotalPrice(price);
    };

    React.useEffect(() => {
        calculateTotalPrice();
    }, [selectedSeats]);

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={styles.movieTitle}>The King's Man</Text>
                    <Text style={styles.subTitle}>March 5, 2021 | 12:30 Hall 1</Text>
                </View>
            </View>

            {/* Screen Representation */}
            <View style={{ backgroundColor: '#f0f0f0', padding: 10 }}>
                <View style={styles.screenSection}>
                    <Svg height="60" width="100%" viewBox="0 0 100 20">
                        <Path d="M0 20 Q50 0 100 20" fill="transparent" stroke="#84bedb" strokeWidth="1" />
                    </Svg>
                    <Text style={styles.screenLabel}>SCREEN</Text>
                </View>
                {/* Seat Layout */}
                <View style={[styles.seatLayout, { transform: [{ scale: zoomLevel }] }]}>
                    {seatLayout.map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.seatRow}>
                            {row.map(({ seat, type }) => (
                                <TouchableOpacity
                                    key={seat}
                                    style={[
                                        styles.seat,
                                        { backgroundColor: selectedSeats.includes(seat) ? seatTypes.selected : seatTypes[type] },
                                    ]}
                                    onPress={() => handleSeatSelection(seat, type)}
                                    disabled={type === 'unavailable'} // Disable unavailable seats
                                >
                                    {/* Remove the Text component to hide seat labels */}
                                    {/* <Text style={styles.seatText}>{seat}</Text> */}
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}
                </View>
                <View style={styles.zoomControls}>
                    <TouchableOpacity onPress={() => setZoomLevel(prev => Math.max(prev - 0.1, 0.5))} style={styles.zoomButton}>
                        <Icon name="remove" size={17} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setZoomLevel(prev => Math.min(prev + 0.1, 2))} style={styles.zoomButton}>
                        <Icon name="add" size={17} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
            {/* Seat Types Legend */}
            <View style={styles.legend}>
                <View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColorBox, { backgroundColor: seatTypes.selected }]} />
                        <Text style={styles.seatslabel}>Selected</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColorBox, { backgroundColor: seatTypes.unavailable }]} />
                        <Text style={styles.seatslabel}>Not Available</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColorBox, { backgroundColor: seatTypes.vip }]} />
                        <Text style={styles.seatslabel}>VIP (150$)</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColorBox, { backgroundColor: seatTypes.available }]} />
                        <Text style={styles.seatslabel}>Regular (50$)</Text>
                    </View>
                </View>

            </View>

            {/* Total Price and Proceed Button */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.priceView}>
                <Text style={styles.totalPrice}>Total Price: </Text>
                <Text style={styles.price}> ${totalPrice}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.proceedButton}>
                    <Text style={styles.proceedButtonText}>Proceed to Pay</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default SelectSeat;
