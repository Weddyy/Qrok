package com.example.repositorys;

import com.example.models.Information;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by weddy on 28.03.17.
 */
@Repository
public class TempRepository {

    private Map<String,Information> informations = new HashMap<>();

    public Map<String,Information> getInformationList()
    {
        return informations;
    }
}
