WITH get_category AS (
    SELECT category
        FROM public.activity

        WHERE
            id = {activity_id}
)

UPDATE public.user_categories AS update_table
    SET
        efficiency_score = CASE 
                            WHEN '{feedback}' = 'positive' THEN 
                                score.efficiency_score * {modifier}
                            WHEN '{feedback}' = 'negative' THEN
                                score.efficiency_score / {modifier}
                            ELSE 
                                score.efficiency_score
                           END

    FROM
    (
        SELECT id, category, efficiency_score
            FROM public.user_categories

            WHERE
                id = '{user_id}'
                AND
                category IN (SELECT * FROM get_category)
    ) score
    
    WHERE 
        update_table.id = score.id 
        AND 
        update_table.category = score.category