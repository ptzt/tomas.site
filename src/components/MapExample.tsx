
"use client"
import { ColorScheme, Map, Marker } from "mapkit-react";
import { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { CgLoadbar } from "react-icons/cg";
import { FaCarRear } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

export default function MapExample() {
  const token: string = process.env.NEXT_PUBLIC_MAP_TOKEN || "";
  const data = [
    {
      "status": "approved",
      "id": "A3A947ED-F7BC-4D0D-8E03-273FFB9CF5DC",
      "country_code": "AR",
      "thumbnail": "coffeedb/coffee-shops/20250210-185739-A3A947ED-F7BC-4D0D-8E03-273FFB9CF5DC-thumb.jpeg",
      "latitude": -34.5545804,
      "is_staff_pick": false,
      "sub_locality": "Comuna 12",
      "created_at": 1739134120.703055,
      "name": "Cima",
      "ip_address": "181.98.65.135",
      "address": "Miller 4314, CABA",
      "longitude": -58.4942705,
      "user": {
        "id": "E16382BB-4FA4-4298-912A-71FDD8A2BED4",
        "full_name": "Betzerra"
      },
      "locality": "Buenos Aires",
      "instagram": "cimacafeclub",
      "updated_at": 1739213859.222748
    },
    {
      "status": "approved",
      "id": "4DBB7088-48F4-4E44-9B09-123F78895B72",
      "country_code": "AR",
      "thumbnail": "coffeedb/coffee-shops/20250203-143044-4DBB7088-48F4-4E44-9B09-123F78895B72-thumb.jpeg",
      "latitude": -34.602369,
      "is_staff_pick": false,
      "sub_locality": "Comuna 1",
      "created_at": 1738473404.829916,
      "name": "Dodó",
      "ip_address": "181.98.65.135",
      "address": "San Martín 487, Buenos Aires",
      "longitude": -58.3737061,
      "user": {
        "id": "E16382BB-4FA4-4298-912A-71FDD8A2BED4",
        "full_name": "Betzerra"
      },
      "locality": "Buenos Aires",
      "instagram": "dodocafecito",
      "updated_at": 1738593044.798218
    },
    {
      "status": "approved",
      "id": "509E2672-19EC-4271-8609-5E230F54135A",
      "country_code": "AR",
      "thumbnail": "coffeedb/coffee-shops/20250203-143112-509E2672-19EC-4271-8609-5E230F54135A-thumb.jpeg",
      "latitude": -34.598856,
      "is_staff_pick": false,
      "sub_locality": "Comuna 5",
      "created_at": 1738473258.769555,
      "name": "Calma Chica",
      "ip_address": "181.98.65.135",
      "address": "Tucumán 3699",
      "longitude": -58.417364,
      "user": {
        "id": "E16382BB-4FA4-4298-912A-71FDD8A2BED4",
        "full_name": "Betzerra"
      },
      "locality": "Buenos Aires",
      "instagram": "calmachicacafe",
      "updated_at": 1738593072.64425
    },
    {
      "status": "approved",
      "id": "426C0D16-02E7-4B15-AA00-83599194686F",
      "country_code": "AR",
      "thumbnail": "coffeedb/coffee-shops/20250203-143124-426C0D16-02E7-4B15-AA00-83599194686F-thumb.jpeg",
      "latitude": -34.5588127,
      "is_staff_pick": false,
      "sub_locality": "Comuna 12",
      "created_at": 1738473108.853626,
      "name": "Continuo",
      "ip_address": "181.98.65.135",
      "address": "Machain 3632",
      "longitude": -58.4875964,
      "user": {
        "full_name": "Betzerra",
        "id": "E16382BB-4FA4-4298-912A-71FDD8A2BED4"
      },
      "locality": "Buenos Aires",
      "instagram": "continuo____",
      "updated_at": 1738593084.078712
    },
    {
      "status": "approved",
      "id": "3F242562-BFCC-4365-B208-79B0E75C0EEB",
      "country_code": "AR",
      "thumbnail": "coffeedb/coffee-shops/20250203-143138-3F242562-BFCC-4365-B208-79B0E75C0EEB-thumb.jpeg",
      "latitude": -34.5594819,
      "is_staff_pick": false,
      "sub_locality": "Comuna 12",
      "created_at": 1738472999.673739,
      "name": "Curuzú",
      "ip_address": "181.98.65.135",
      "address": "Quesada 3294, Buenos Aires",
      "longitude": -58.4726217,
      "user": {
        "id": "E16382BB-4FA4-4298-912A-71FDD8A2BED4",
        "full_name": "Betzerra"
      },
      "locality": "Buenos Aires",
      "instagram": "curuzucafe",
      "updated_at": 1738593098.4215431
    },
    {
      "status": "approved",
      "id": "20FD7959-C312-449D-A673-1D9732A585C3",
      "country_code": "AR",
      "thumbnail": "coffeedb/coffee-shops/20250201-162006-20FD7959-C312-449D-A673-1D9732A585C3-thumb.jpeg",
      "latitude": -34.581274,
      "is_staff_pick": false,
      "sub_locality": "Comuna 14",
      "created_at": 1738383804.969542,
      "name": "Nela",
      "ip_address": "186.22.18.111",
      "website": "https://linktr.ee/nelacafe",
      "address": "El Salvador 5847",
      "longitude": -58.437763,
      "user": {
        "id": "E16382BB-4FA4-4298-912A-71FDD8A2BED4",
        "full_name": "Betzerra"
      },
      "locality": "Buenos Aires",
      "instagram": "nela_cafe",
      "updated_at": 1738426806.326787
    },
    {
      "status": "approved",
      "id": "33DCE65A-DA89-4B21-AD92-58279DCB5739",
      "country_code": "US",
      "thumbnail": "coffeedb/coffee-shops/20250127-010837-33DCE65A-DA89-4B21-AD92-58279DCB5739-thumb.jpeg",
      "latitude": 37.3999253,
      "is_staff_pick": false,
      "sub_locality": "San Antonio",
      "created_at": 1737939201.7528272,
      "name": "Coupa Cafe",
      "ip_address": "12.203.56.101",
      "website": "https://www.coupacafe.com/",
      "address": "4748 W El Camino Real, Los Altos, CA 94022, United States",
      "longitude": -122.1117137,
      "user": {
        "id": "BA4338F6-82DA-4332-AF6E-92AAFF1D3B22",
        "full_name": "Nico Ameghino"
      },
      "locality": "Los Altos",
      "instagram": "coupacafe",
      "updated_at": 1737940117.868762
    },
    {
      "status": "approved",
      "id": "B73D8EFE-E809-4EB3-BF7D-7924FFF66BA7",
      "country_code": "AR",
      "thumbnail": "coffeedb/coffee-shops/20250127-010855-B73D8EFE-E809-4EB3-BF7D-7924FFF66BA7-thumb.jpeg",
      "latitude": -34.580151,
      "is_staff_pick": false,
      "sub_locality": "Comuna 14",
      "created_at": 1737938810.360852,
      "name": "Croma",
      "ip_address": "186.22.18.111",
      "website": "https://mimenulatech.com/cromacafe/menu",
      "address": "Fitz Roy 2210",
      "longitude": -58.431878,
      "user": {
        "full_name": "Betzerra",
        "id": "E16382BB-4FA4-4298-912A-71FDD8A2BED4"
      },
      "locality": "Buenos Aires",
      "instagram": "cromacafe_",
      "updated_at": 1737940135.813209
    },
    {
      "status": "approved",
      "id": "437C225E-307F-4163-883E-0229E2732A97",
      "country_code": "AR",
      "thumbnail": "coffeedb/coffee-shops/20250125-033950-437C225E-307F-4163-883E-0229E2732A97-thumb.jpeg",
      "latitude": -34.567521,
      "is_staff_pick": false,
      "sub_locality": "Comuna 13",
      "created_at": 1737775725.787898,
      "name": "Morro",
      "ip_address": "186.22.18.111",
      "website": "https://drive.google.com/file/d/1FOeXyZDyuVeG0ywCxMPvvRCd8jS329QQ/view?usp=sharing",
      "address": "Sucre 3010, C1428 Cdad. Autónoma de Buenos Aires",
      "longitude": -58.4608143,
      "user": {
        "id": "E16382BB-4FA4-4298-912A-71FDD8A2BED4",
        "full_name": "Betzerra"
      },
      "locality": "Buenos Aires",
      "instagram": "morro.cafe",
      "updated_at": 1737776391.0571399
    },
    {
      "status": "approved",
      "id": "325C9B69-D2FF-4B4D-8DBB-6E47D0728CA4",
      "country_code": "US",
      "thumbnail": "coffeedb/coffee-shops/20250125-021003-325C9B69-D2FF-4B4D-8DBB-6E47D0728CA4-thumb.jpeg",
      "latitude": 40.7159561,
      "is_staff_pick": false,
      "sub_locality": "Brooklyn",
      "created_at": 1737745588.546318,
      "name": "Devoción",
      "ip_address": "186.22.18.111",
      "address": "69 Grand St, Brooklyn, NY 11249",
      "longitude": -73.9647719,
      "locality": "New York",
      "instagram": "devocionusa",
      "updated_at": 1737771003.619288
    },
  ]
  const initialRegion = {
    centerLatitude: -34.60,
    centerLongitude: -58.39,
    latitudeDelta: 0.12,
    longitudeDelta: 0.12
  }
  const [selected, setSelected] = useState<any>(null);
  const [showInfo, setShowInfo] = useState(false);

  const onDeselect = () => {
    setSelected(null)
    setShowInfo(false)
  }

  return (
    <div className="w-full h-screen " >
      <Map
        token={token}
        initialRegion={initialRegion}
        colorScheme={ColorScheme.Dark}
        showsZoomControl={false}
        showsCompass={0}
        showsMapTypeControl={false}
        allowWheelToZoom={true}
      >
        {data.map((place) => {
          const initials = place.name.slice(0, 2).toUpperCase();
          return (
            <Marker
              key={place.id}
              latitude={place.latitude}
              longitude={place.longitude}
              title={place.name}
              subtitle={place.address}
              onSelect={() => setSelected(place)}
              onDeselect={() => onDeselect()}
              glyphText={initials}
              glyphColor={'black'}
            />
          )
        })}
      </Map>

      {/* Overlay that darkens the background */}
      {showInfo && (
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      )}

      {selected && (
        <div className="absolute bottom-2 left-0 right-0 mx-2">
          <div className=" w-full p-2 rounded-lg flex items-center justify-between space-x-4" style={{
            background: 'linear-gradient(134deg, #2f3336, #565c61)'
          }}>
            <section className="flex items-center gap-x-2">
              <Image
                src={`https://nyc3.digitaloceanspaces.com/betzerra/${selected.thumbnail}`}
                width={60}
                height={60}
                alt="Coffee icon"
                className="rounded-lg"
              />
              <div className="text-white">
                <h1 className="text-base md:text-lg">{selected.name}</h1>
                <p className="text-sm md:text-base">{selected.address}</p>
              </div>
            </section>
            <IoIosArrowForward
              size={25}
              onClick={() => setShowInfo(prevState => !prevState)}
              className="cursor-pointer"
            />
          </div>
        </div>
      )}

      {showInfo && selected && (
        <div className="absolute bottom-2 mx-2 left-0 right-0 z-20">
          <div className=" w-full md:w-11/12 lg:w-1/2 xl:w-1/3 px-5 rounded-lg mx-auto flex flex-col items-center"
            style={{ background: '#1e2224' }}
          >
            <CgLoadbar
              size={35}
              className="cursor-pointer"
              onClick={() => setShowInfo(false)}
            />
            <div className="w-full flex items-center gap-x-2 my-5">
              <Image
                src={`https://nyc3.digitaloceanspaces.com/betzerra/${selected.thumbnail}`}
                width={60}
                height={60}
                alt="Coffee icon"
                className="rounded-lg"
              />
              <h1 className="text-base md:text-lg">{selected.name}</h1>
            </div>

            <div className="mb-5 w-full">
              <button className="text-sm md:text-base font-bold">Address</button>
              <p className="text-sm md:text-base">{selected.address}</p>
            </div>

            <div className="flex gap-4 w-full justify-center mb-20 text-white">
              <button
                className="flex flex-col items-center bg-pinkSystem p-4 rounded-xl gap-y-1 hover:bg-opacity-80"
                onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${selected.latitude},${selected.longitude}`, "_blank")}
              >
                <FaCarRear size={20} />
                Directions
              </button>
              <button
                className="flex flex-col items-center bg-gray-700 p-4 rounded-xl gap-y-1 hover:bg-opacity-80"
                onClick={() => window.open(`https://www.instagram.com/${selected.instagram}/`, '_blank')}
              >
                <SiInstagram size={20} />
                Instagram
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}



