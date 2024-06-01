package com.example.ems_backend.mapper;


import com.example.ems_backend.dto.DeviceDto;
import com.example.ems_backend.entity.Device;

public class DeviceMapper {
    public static DeviceDto mapToDeviceDto(Device device){
        return new DeviceDto(
                device.getId(),
                device.getName(),
                device.getModel(),
                device.getStatus(),
                device.getEnrolledTime()
        );
    }

    public static Device mapToDevice(DeviceDto deviceDto){
        return new Device(
                deviceDto.getId(),
                deviceDto.getName(),
                deviceDto.getModel(),
                deviceDto.getStatus(),
                deviceDto.getEnrolledTime()
        );
    }
}