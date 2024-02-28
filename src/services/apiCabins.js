import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    throw new Error("Cabin could not be deleted");
  }
  return null;
}

export async function createUpdateCabin(newcabin, id) {
  const hasImagepath = newcabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newcabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagepath
    ? newcabin.image
    : `${supabaseUrl}/storage/v1/object/
  public/cabin-images/${imageName}`.replaceAll(" ", "");

  let query = supabase.from("cabins");
  // 1- Create cabin
  if (!id) query = query.insert([{ ...newcabin, image: imagePath }]);

  // 2- Update cabin
  if (id) query = query.update({ ...newcabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Cabin could not be created");
  }

  if (hasImagepath) return data;
  // 2- Upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newcabin.image);

  // 3- delete the cabin if there was an error uploadind image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }
  return data;
}
