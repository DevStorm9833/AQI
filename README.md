# AQI

# Reference 
- AQI website: https://www.aqi.in/in
- API_KEY : aqicn f3dbd79d82849161bc891d3f99aa17df24ce5340
- openweather bd6ac3542d15cd7daf12f898abe3c42b

- some AQI img links
- https://www.sei.org/wp-content/uploads/2020/09/gettyimages-469339221-cleanairday-mediaadvisory-resamp.jpg
- https://moderndiplomacy.eu/wp-content/uploads/2021/09/air-pollution-china.jpg


- some NPI img links :
- https://static.toiimg.com/thumb/msid-105136821,width-1280,height-720,resizemode-72/105136821.jpg
- https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUybUk-B3N-dAtI1gzva9__UkMU0PmnC-WA&s
- https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8vRXClnC3CwKfK4hJzj5Y0qlSS5fQYqqDA&s




# Output:

1. Landing Page

![image_alt]()

2. Login

3. Create_Account
   + Remember password

4. Forgot_Password




✓ User Pages(6 pages)

5. AQI_Home
   + Search button should direct user to Maps page
   + Menu( Maps, Ranking, Feedback, Login/Sign Up )
   + Green Mountains bg img
   + Daily Awareness Quiz / Facts
   + Nearby Location ka data in AQI, Humidity, Temp
   + Monthly and Weekly Graphs
   + Health Advisories in Causes, Effects, Solution( Decoding the Air We Breathe )

6. Noise_Home
   + Search button should direct user to Maps page
   + Menu( Maps, Ranking, Feedback, Login/Sign Up )
   + bg img
   + Daily Awareness Quiz / Facts
   + Nearby Location ka data in NPI,
   + Monthly and Weekly Graphs
   + Health Advisories in Causes, Effects, Solution( Decoding the Noise We Hear )

7. AQI_Map
   + Search Button
   + When you click on any location or search for any location it should zoom the map to that location.
   + In left side all the AQI details should be shown... Refer https://www.aqi.in/in/air-quality-map

8. NPI_Map
   + Search Button
   + When you click on any location or search for any location it should zoom the map to that location.
   + In left side all the NPI details should be shown.

9. AQI_Ranking
    + filtered by Central, Western, Harbour 
    + Search Button, Refresh, Export, Last updated & Next update Time
    + Table( Line, Station, Lat, Long, AQI, PM2.5, 10, NO2, SO2, CO, O3)
      
11. NPI_Ranking
    + Search Button
    + Live NPI City Ranking



✓ Admin Page( Everything same as User )

11. AQI_Admin
    + Profile Icon
    + Menu( Dashboard, Alerts, AQI_Map, AQI_Ranking, History Reports, User Feedback stats, Settings
    + Dashboard Analysis
    + + Top 5 High & Low Avg AQI stations Weekly, Monthly i.e Alerts
      + Graphs for each station filtered by Sept 2025 v/s Sept 2024, Sept v/s Aug,
      + Heatmaps
      + Feedback(+ve / -ve) for each station
    + AQI_Map
    + AQI_Ranking
    + + Same as User
      + Add, Delete, Update stations
    + History Reports
    + + Export Json file
      + Search button filtered by Station, Daily Weekly, Monthly, Yearly, Decadal
      + Table( AQI, PM2.5, 10, NO2, SO2, CO, O3)
    + User
      + Feedbacks for each station and its stats
      + + Manage user feedback (approve, resolve, escalate, or reject).
        + Feedback box should show Name, Email, Place, Date & Time, ⭐ rating, File(Img, Audio, Video) filtered by Regions.
      + Account Controls
      + + Add, Delete Users
        + Audit logs of logins, failed attempts, and account activity
      
    + Settings

12. NPI_Admin
    + Profile Icon
    + Menu( Dashboard, Alerts, History Reports, User Account controls & Feedback stats, Settings
    
    
